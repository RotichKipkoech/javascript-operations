// Class representing a Student
class Student {
    constructor(name, age, studentId) {
      this.name = name;
      this.age = age;
      this.studentId = studentId;
      this.courses = [];
    }
  
    // Enroll the student in a course
    enroll(course) {
      this.courses.push(course);
      console.log(`${this.name} has enrolled in ${course.name}.`);
    }
  
    // Display student details
    getDetails() {
      console.log(`Student: ${this.name}, Age: ${this.age}, ID: ${this.studentId}`);
      console.log("Enrolled Courses:");
      this.courses.forEach(course => {
        console.log(`- ${course.name}`);
      });
    }
  }
  
  // Class representing a Teacher
  class Teacher {
    constructor(name, subject) {
      this.name = name;
      this.subject = subject;
      this.courses = [];
    }
  
    // Assign a course to the teacher
    assignCourse(course) {
      this.courses.push(course);
      console.log(`${this.name} is now teaching ${course.name}.`);
    }
  
    // Display teacher details
    getDetails() {
      console.log(`Teacher: ${this.name}, Subject: ${this.subject}`);
      console.log("Courses:");
      this.courses.forEach(course => {
        console.log(`- ${course.name}`);
      });
    }
  }
  
  // Class representing a Course
  class Course {
    constructor(name, courseCode) {
      this.name = name;
      this.courseCode = courseCode;
      this.students = [];
      this.teachers = [];
    }
  
    // Enroll a student in the course
    enrollStudent(student) {
      this.students.push(student);
      console.log(`${student.name} has been enrolled in ${this.name}.`);
    }
  
    // Assign a teacher to the course
    assignTeacher(teacher) {
      this.teachers.push(teacher);
      console.log(`${teacher.name} has been assigned to teach ${this.name}.`);
    }
  
    // Display course details
    getDetails() {
      console.log(`Course: ${this.name}, Code: ${this.courseCode}`);
      console.log("Enrolled Students:");
      this.students.forEach(student => {
        console.log(`- ${student.name}`);
      });
      console.log("Teachers:");
      this.teachers.forEach(teacher => {
        console.log(`- ${teacher.name}`);
      });
    }
  }
  
  // Example Usage:
  
  // Create instances of students
  const student1 = new Student('Alice', 16, 'S001');
  const student2 = new Student('Bob', 17, 'S002');
  
  // Create instances of teachers
  const teacher1 = new Teacher('Mr. Smith', 'Math');
  const teacher2 = new Teacher('Ms. Johnson', 'Science');
  
  // Create instances of courses
  const course1 = new Course('Mathematics', 'MATH101');
  const course2 = new Course('Science', 'SCI101');
  
  // Enroll students in courses
  student1.enroll(course1);
  student2.enroll(course2);
  
  // Assign teachers to courses
  teacher1.assignCourse(course1);
  teacher2.assignCourse(course2);
  
  // Enroll students in the respective courses
  course1.enrollStudent(student1);
  course2.enrollStudent(student2);
  
  // Display details
  console.log("\n--- Student Details ---");
  student1.getDetails();
  student2.getDetails();
  
  console.log("\n--- Teacher Details ---");
  teacher1.getDetails();
  teacher2.getDetails();
  
  console.log("\n--- Course Details ---");
  course1.getDetails();
  course2.getDetails();
  