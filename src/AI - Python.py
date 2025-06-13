import nltk
from nltk.tokenize import sent_tokenize, word_tokenize
from nltk.corpus import stopwords
from nltk.probability import FreqDist
from heapq import nlargest

# Sample text to be summarized
text = """
Artificial intelligence (AI) is intelligence demonstrated by machines, in contrast to the natural intelligence displayed by humans and animals. Leading AI textbooks define the field as the study of "intelligent agents": any device that perceives its environment and takes actions that maximize its chance of successfully achieving its goals.

Colloquially, the term "artificial intelligence" is often used to describe machines (or computers) that mimic "cognitive" functions that humans associate with the human mind, such as "learning" and "problem-solving". As machines become increasingly capable, tasks considered to require "intelligence" are often removed from the definition of AI, a phenomenon known as the AI effect.

A subset of AI, machine learning, focuses on the development of computer programs that can access data and use it to learn for themselves. The process of learning begins with observations or data, such as examples, direct experience, or instruction, to look for patterns in data and make better decisions in the future based on the examples that we provide. The primary aim is to allow the computers to learn automatically without human intervention or assistance and adjust actions accordingly.

Text summarization is the process of distilling the most important information from a source text. There are generally two main approaches to automatic text summarization: extractive and abstractive. Extractive methods select a subset of sentences from the original text, while abstractive methods aim to generate new sentences that capture the essence of the original text. Both approaches have their advantages and limitations, and the choice between them depends on the specific requirements of the task.

In this example, we will implement a simple extractive text summarization algorithm using Python and NLTK.
"""

# Tokenize the text into sentences
sentences = sent_tokenize(text)

# Tokenize words and remove stopwords
words = word_tokenize(text.lower())
stop_words = set(stopwords.words('english'))
filtered_words = [word for word in words if word.isalnum() and word not in stop_words]

# Calculate word frequency
word_freq = FreqDist(filtered_words)

# Calculate sentence scores based on word frequency
sentence_scores = {}
for sentence in sentences:
    for word in word_tokenize(sentence.lower()):
        if word in word_freq:
            if sentence not in sentence_scores:
                sentence_scores[sentence] = word_freq[word]
            else:
                sentence_scores[sentence] += word_freq[word]

# Get the top N sentences with highest scores
summary_sentences = nlargest(3, sentence_scores, key=sentence_scores.get)

# Combine top sentences to generate summary
summary = ' '.join(summary_sentences)

print("Original text:\n", text)
print("\nSummary:\n", summary)
