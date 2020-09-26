# Password-Generator-HW

Declare variables for: 
    var charCount = how many char
    var name = 
    var name =

Generate password button which starts the loops of prompt/confirms from computer to user
 User Prompt - How many characters 
        If >8 <128 than true (boolean)
        Else <8 or >128 than false 
    
User Confirms:
    Do you want lowercase?
    Do you want uppercase?
    Do you want numbers?
    Do you want special char?

Empty array to store this information?  emptyArray = [ L, U, num, %] --- each separate array within the emptyArray
Function called generatePassword of this array and the return is the password?
For loop nested in the generate password function, for each position of the loop it will generate a random character 
*Need separate arrays for each (lower,upper,num,sc)
mathRandom for num but what functions for char and spc


If user selects yes for any than = true
Else user selects no for all than = fals
    Alert "you must select at least one"



pwd = pwd + rc 

*console.log as you go thru each step 
first add the generatePassword function
then add the prompts and the alert
then add the for loop 
