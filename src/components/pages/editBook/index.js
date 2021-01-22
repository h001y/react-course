import React, { useState, useEffect } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { useHistory } from "react-router";
import { bookPath } from "../../../services/helpers/routes";
import { yupResolver } from "@hookform/resolvers";
import Template from "../../template";
import Field from "../../template/Field";
import Loader from "../../template/Loader";
import * as yup from 'yup';
import { uploadFile } from "../../../services/helpers/filestack";
import getBook from "../../../services/hooks/getBook";
import useAuthors from "../../../services/hooks/useAuthors";
import { updateBook } from "../../../services/hooks/updateBook";
import DropzoneField from "../../template/DropzoneField";

const supportedFormats = [
    "image/jpg",
    "image/jpeg",
    "image/gif",
    "image/png"
]

const schema = yup.object().shape({
    title: yup.string().required(),
    description: yup.string().required(),
    pages_count: yup.number().required(),
    min_price: yup.number().min(100).required(),
    desired_price: yup.number().max(100000).required(),
    current_sum: yup.number().min(0).required(),
    expected_sum: yup.number().min(0).required(),
    authors: yup.array().required(),

})


const EditBook = ({ match: { params } }) => {
    const { setValue, errors, register, handleSubmit, control, formState: { isSubmitting } } = useForm({ resolver: yupResolver(schema) })
    const [coverFile, setCoverFile] = useState(null);

    const { fields, append, remove } = useFieldArray({
        control,
        name: 'authors'
    })

    const history = useHistory()
    const book = getBook(params.id)
    const authors = useAuthors()


    useEffect(() => {
        if (book)
            setValue('authors', book.authorIds.map(authorId => ({ id: authorId })))
    }, [book])

    if (!book || !authors)
        return <div>Waiting...</div>

    const onSubmit = async ({...fields}) => {
        const formData = new FormData()
        formData.append('fileUpload', coverFile)
        const uploadResult = await uploadFile(formData)

        for (const key in fields) {
            if (!isNaN(parseFloat(fields[key]))) {
                fields[key] = parseFloat(fields[key])
            }
        }

        const res = await updateBook(book.id, {
            ...fields,
            cover: uploadResult.url
        })

        const newBookId = res.records[0].id
        history.push(bookPath(newBookId))
    }

    return (
        <Template>
            Edit Book

            <form onSubmit={handleSubmit(onSubmit)}>
                <Field name='title' errors={errors} label='title' className={styles.field} defaultValue={book.title} register={register(register)}/>
                <Field name='description' errors={errors} label='description' componentType='textarea' className={styles.field} defaultValue={book.description} register={register}/>
                <Field name='pages_count' errors={errors} label='pages_count' fieldType='number' className={styles.field} defaultValue={book.pages_count} register={register}/>
                <Field name='min_price' errors={errors} label='min_price' fieldType='number' className={styles.field} defaultValue={book.min_price} register={register}/>
                <Field name='desired_price' errors={errors} label='desired_price' fieldType='number' className={styles.field} defaultValue={book.desired_price} register={register}/>
                <Field name='current_sum' errors={errors} label='current_sum' fieldType='number' className={styles.field} defaultValue={book.current_sum} register={register}/>
                <Field name='expected_sum' errors={errors} label='expected_sum' fieldType='number' className={styles.field} defaultValue={book.expected_sum} register={register}/>

                { book.cover && <img src={book.cover} alt="Cover"/> }

                <label htmlFor='authors' className={styles.selectLabel}>authors</label>

                { fields.map((field, index) => (
                    <select
                        key={index}
                        ref={register}
                        className={styles.selectOptions}
                        name={`authors[${index}]`}
                        defaultValue={field.id}
                    >
                        {authors.map((author) => (
                            <option key={author.id} value={author.id}>{author.name}</option>
                        ))}
                    </select>
                ))}

                <button type="button" onClick={() => append({})}>append</button>

                {errors && errors['authors'] && <span style={{color: 'red'}}>{errors['authors'].message}</span>}

                <DropzoneField errors={errors} setCoverFile={setCoverFile} />
                {errors && errors['cover'] && <span style={{color: 'red'}}>{errors['cover'].message}</span>}

                <br/>

                { isSubmitting
                    ? <Loader/>
                    : <button className={styles.submitButton}>Update book</button>
                }

            </form>
        </Template>
    )

}

export default EditBook