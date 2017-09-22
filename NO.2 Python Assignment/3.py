# Your code should have atleast five classes.
# Your code should have _init_ constructor in all the classes
# Your code should show inheritance atleast once
# Your code should have one super call
# Use of self is required
# Use at least one private data member in your code.
# Use multiple Inheritance atleast once
# Create instances of all classes and show the relationship between them.
# Your submission code should point out where all these things are present

# Student Enrollment System (classes for Student,System,Grades etc.)

class People:
    def __init__(self, name, age):
        self.name=name;
        self.age=age;
    def printname(self):
        print("The name is " + self.name+", im ",self.age,"years old.");


class Grades:
    def __init__(self, grade, number):
        self.grade=grade;
        self.number=number;
    def printgades(self):
        print("The grades is ",self.grade," and the class is ",self.number)

class Teacher():
    def __init__(self, teachername, area):
        self.teachername=teachername;
        self.area=area;
    def printteacher(self):
        print("The professor's name is "+self.teachername+" and his area of expertise is "+self.area)


class Student:
    def __init__(self,major):
        self.major=major;

    def printstudent(self):
        print("Your major is "+self.major)

class System(People, Grades,Teacher,Student):
    def __init__(self, name, age, grades, number,teachername, area, major,__f):
        self.f=__f;
        People.__init__(self, name, age);
        Grades.__init__(self, grades, number);
        Teacher.__init__(self, teachername, area);
        Student.__init__(self, major);
    def display(self):
        super(System, self).printname();
        super(System, self).printgades();
        super(System, self).printteacher();
        super(System, self).printstudent();


e=System("tom",18,5,3,"Lee","Python","computer","welcome!")
print(e.display())