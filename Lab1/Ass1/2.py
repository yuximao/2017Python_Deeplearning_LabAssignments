str="lksfhs jkbvasl   kghiz sfhsakha123123!!"
list=list(str)
list2=[];
j=0;
for i in range(len(list)):
    if list[i].isalpha():
        if list[i] in list2:
            print()
        else:
            list2.append(list[i]);
            j=j+1;

    else:print()

print("Your str include:",list2)
if len(list2)==26:
    print("Your str include all the lstters!")
else:
    print("Your str NOT-include all the lstters!")