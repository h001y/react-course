import React, { useState, useEffect } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { useHistory } from "react-router";
import { bookPath } from "../../../services/helpers/routes";
import { yupResolver } from '@hookform/resolvers/yup';
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
    name: yup.string().required(),
    shortDescription: yup.string().required(),
    pagesNum: yup.number().required(),
    minPrice: yup.number().min(100).required(),
    expectPrice: yup.number().max(100000).required(),
    takenBill: yup.number().min(0).required(),
    WaitingBill: yup.number().min(0).required(),
    authors: yup.array().required(),
    urlPic: yup.mixed()
        .test(
            "required",
            "A File is required",
            value => value && value.length > 0
        ).test(
            "fileFormat",
            "Unsupported format",
            value => value && value[0] && supportedFormats.includes(value[0].type)
        )
        .test(
            "fileSize",
            "File to large",
            value => value && value[0] && value[0].size <= 1000000
        )
})

const NewBook = () => {
    const { errors, register, handleSubmit, control, formState: { isSubmitting } } = useForm({ resolver: yupResolver(schema) })
    const [coverFile, setCoverFile] = useState(null);

    const { fields, append, remove } = useFieldArray({
        control,
        name: 'book'
    })

    const history = useHistory()

    const authors = useAuthors()
    if (!authors)
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

        const res = await createBook({
            ...fields,
            cover: uploadResult.url
        })

        const newBookId = res.records[0].id
        history.push(bookPath(newBookId))
    }

    return (
        <Template>
            New Book

            <form onSubmit={handleSubmit(onSubmit)}>
                <Field name='name' errors={errors} label='name' className={styles.field} register={register}/>
                <Field name='shortDescription' errors={errors} label='shortDescription' componentType='textarea' className={styles.field} register={register}/>
                <Field name='pagesNum' errors={errors} label='pagesNum' fieldType='number' className={styles.field} defaultValue={0} register={register}/>
                <Field name='minPrice' errors={errors} label='minPrice' fieldType='number' className={styles.field} defaultValue={200} register={register}/>
                <Field name='expectPrice' errors={errors} label='expectPrice' fieldType='number' className={styles.field} defaultValue={0} register={register}/>
                <Field name='takenBill' errors={errors} label='takenBill' fieldType='number' className={styles.field} defaultValue={0} register={register}/>
                <Field name='WaitingBill' errors={errors} label='WaitingBill' fieldType='number' className={styles.field} defaultValue={0} register={register}/>

                <DropzoneField errors={errors} setCoverFile={setCoverFile} register={register}/>

                <label htmlFor='authors' className={styles.selectLabel}>authors</label>

                { fields.map((field, index) => (
                    <select
                        key={index}
                        ref={register}
                        className={styles.selectOptions}
                        name={`authors[${index}]`}
                    >
                        {authors.map((author) => (
                            <option key={author.id} value={author.id}>{author.name}</option>
                        ))}
                    </select>
                ))}

                <button type="button" onClick={() => append({})}>append</button>

                {errors && errors['authors'] && <span style={{color: 'red'}}>{errors['authors'].message}</span>}

                <br/>
                { isSubmitting
                    ? <Loader />
                    : <button type="submit" className={styles.submitButton}>Add book</button>
                }
            </form>
        </Template>
    )

}

export default NewBook