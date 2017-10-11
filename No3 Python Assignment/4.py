import nltk
from __builtin__ import file
from nltk.tokenize import word_tokenize, wordpunct_tokenize,sent_tokenize
from nltk.corpus import wordnet as wn
from nltk.stem import SnowballStemmer
from nltk.tokenize import word_tokenize
from nltk.tag import pos_tag
from nltk.stem import WordNetLemmatizer
from nltk import word_tokenize, re
from nltk.util import ngrams
from collections import Counter
from nltk import pos_tag, ne_chunk
from nltk.tokenize import wordpunct_tokenize
import collections
import re, collections

lemmatizer=WordNetLemmatizer();

f = open("input.txt")
list=[]
word=[]
words=[]
files=[]
s=""
line = f.readline()

# top five words
def tokens(text):
    return re.findall('[a-z]+',text.lower())
a=tokens(file('input.txt').read())
counts=collections.Counter(a)
words =counts.most_common(5)

a=file("input.txt").read();
files=sent_tokenize(a)
filess=[word_tokenize(t) for t in files]
for i in files:
    for j in i.split(" "):
        if (j==words[0][0])or(j==words[1][0])or(j==words[2][0])or(j==words[3][0])or(j==words[4][0]):
            s=s+i+"\n";
            break;
print (s);

while line:
    # print line,
    list.append(line);
    line=f.readline();


for i in list:
    for word in i.split(" "):
        words.append(word);
        synsets = wn.synsets(word)
        # Lemmatizer
        lemmatizer.lemmatize(word)
        # POS
        sets= pos_tag(wordpunct_tokenize(word))
        for j in sets:
            if (j[1]=="VBZ"): del word;
            else: print (word);



