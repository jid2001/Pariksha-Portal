# Pariksha-Portal
Project-

Exam Portal
stack- Spring Boot,Hibernate,Angular,MySql,Spring Security,JWT token
#User/Student

User can signup and login
User can see their Profile Information
User can select Quiz based on Category (If it is active)
follow the instructions and can attempt multiple times
answer the questions within the time because there is a timer
can see their marks and number of correct answers after submit
auto submit after time has finished
#Admin/Teacher

Admin can add Category, add Quizzes based on Category
Admin can add Questions based on Quiz-topic
Admin can view,update,delete Category, Quiz and Questions
Json Web token was used for authentication.BCryptPasswordEncoder(spring security) was used to encrypt the password.Authguard(angular) is used to protect the routes. The most difficult technical challenge of this project was to implement security.

