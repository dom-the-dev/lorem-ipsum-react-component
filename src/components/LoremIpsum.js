import React from 'react';
import PropTypes from 'prop-types';
import {wordsList} from "../data/wordsList";

const LoremIpsum = ({words, paragraphs}) => {

    const renderText = (words) => {
        let wordStorage = wordsList
        let text = ''

        while (wordStorage.length < words) {
            wordStorage = wordStorage.concat(wordsList)
        }

        for (let i = 0; i < words; i++) {
            if (i > 0) {
                text += ' '
            }


            let nextWord = wordsList[Math.floor(Math.random() * wordsList.length)]

            if (i === 0) {
                nextWord = nextWord.charAt(0).toUpperCase() + nextWord.slice(1);
            }

            text += nextWord

        }

        text += '.';
        return text;
    }

    const renderParagraphs = () => {
        let text = [];

        for (let i = 0; i < paragraphs; i++) {
            text.push(<p key={'lorem-ipsum-paragraph-' + i}>{renderText(words / paragraphs)}</p>)
        }

        return text;
    }

    return (
        <div>
            {renderParagraphs()}
        </div>
    );
};

LoremIpsum.propTypes = {
    words: PropTypes.number,
    paragraphs: PropTypes.number
};

LoremIpsum.defaultProps = {
    paragraphs: 1,
    words: 1
}

export default LoremIpsum;
