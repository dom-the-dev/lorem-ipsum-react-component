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

            text += wordsList[Math.floor(Math.random() * wordsList.length)]
        }

        text += '.';
        return text;
    }

    const renderParagraphs = () => {

        let text = [];

        for (let i = 0; i < paragraphs; i++) {
            text.push(<p>{renderText(words / paragraphs)}</p>)
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
    words: PropTypes.number.isRequired,
    paragraphs: PropTypes.number.isRequired
};

LoremIpsum.defaultProps = {
    paragraphs: 1,
    words: 1
}

export default LoremIpsum;
