import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import BookCard from "./bookCard";

test('render author in a card', () => {
    const book = [{"id":"2","name":"Narrative of the Life of Frederick Douglass, an American Slave","shortDescription":"Narrative of the Life of Frederick Douglass is an 1845 memoir and treatise on abolition written by famous orator and former slave Frederick Douglass during his time in Lynn, Massachusetts. It is generally held to be the most famous of a number of narratives written by former slaves during the same period. In factual detail, the text describes the events of his life and is considered to be one of the most influential pieces of literature to fuel the abolitionist movement of the early 19th century in the United States.\n\nNarrative of the Life of Frederick Douglass encompasses eleven chapters that recount Douglass's life as a slave and his ambition to become a free man. It contains two introductions by well-known white abolitionists: a preface by William Lloyd Garrison, and a letter by Wendell Phillips, both arguing for the veracity of the account and the literacy of its author.","pagesNum":"312","language":"en","progress":"30%","urlPic":"https://dl.airtable.com/.attachmentThumbnails/301343accd894e11ce516fcf589b977a/0521fcf7","minPrice":"9$","expectPrice":"35$","takenBill":"70$","WaitingBill":"500$","authors":[]}];

    const { getByText } = render(<BookCard book={book} />);

    expect(getByText('312')).toBeInTheDocument();
    expect(getByText('Narrative of the Life of Frederick Douglass, an American Slave')).toBeInTheDocument();
});