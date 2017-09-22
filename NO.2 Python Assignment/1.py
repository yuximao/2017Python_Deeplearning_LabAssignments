str=input("input a sentence:")

format='abcdefghijklmnopqrstuvwxyz '
for s in str:
    if not s in format:
        str=str.replace(s,'')

set1=set(str.split(' '));
print(sorted(set1))
