import collections;
file = open("1.txt",'r')
str = file.readline()

format='abcdefghijklmnopqrstuvwxyz '
for s in str:
    if not s in format:
        str=str.replace(s,'')

list=str.split(' ')
sum=collections.Counter(list);
file=open('output.txt','w+')
file.write(repr(sum))
file.close()
