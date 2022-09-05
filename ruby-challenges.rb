# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns an array of all the words containing that particular letter. Use the test variables provided.


beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']


# PSEUDO: for this challenge you have to create a method that would filters out the provided variable array that would output only the words that contain a specific letter with the provided variable letters.
# the first variable letter is requireing to provide the words that contain the letter 'o'
# the second variable letter is requiring to provide the words that contain the letter 't'
# i created a method called words_with_letter that takes in two arguments named with my prefered naming convention. 
# in this case i am trying to pass the variable with the array and one of the variable with a letter as arguments
# within the method i used a ruby block to add another method to filter out the argument array with a conditon set to only include the words containing the the letter i am passing as an argument.
#in the ruby block method i used the enumerable .filter to iterate the arrays values 
# for the iterations i set the condition using .include to pass the values that contained the specific argument letter
#you would apply this method to both variable letters to output the specific values

def words_with_letter (array, letter)
    array.filter do |values| values.include?(letter)
    end
end
 p words_with_letter(beverages_array, letter_o)
 p words_with_letter(beverages_array, letter_t)


# -------------------2) Create a method that takes in a hash and returns one array with all the hash values at their own index and in alphabetical order. No nested arrays. Use the test variable provided.
# HINT: Google 'ruby get rid of nested arrays'


us_states = { northwest: ['Washington', 'Oregon', 'Idaho'], southwest: ['California', 'Arizona', 'Nevada'], northeast: ['Maine', 'New Hampshire', 'Vermont'] }
# Expected output: ['Arizona', 'California', 'Idaho', 'Maine', 'Nevada', 'New Hampshire', 'Oregon', 'Vermont', 'Washington'] 

# PSEUDO for this challenge i created a method called alphabetical that will let me pass the hash as an argument.
# within my method i created a variable that would take my hash argument as its value but the value is set to convert the hash to an array using the conversion method to_a
#once doing that the array will convert the hash with to an array with the keys and the values nested in there own array.
#to eliminate the nested array i used the inbuilt method .flatten that will return a all the values in one complete set array
# following this method i had to delete the values that were used to represent keys using .delete
#following there deletion i had to esnure that the values were sorted in aplhabetical order as prescribed in the challenge. use .sort.

def alphabetical (states)
    array = states.to_a.flatten!
    array.delete(:northwest)
    array.delete(:southwest)
    array.delete(:northeast)
    # array.sort
end
p alphabetical(us_states)


# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

#PSEUDO: i ceated a custom class as directed i the challenge that.

class Bike 
   # the attr_accesor was created to access the following symbols that represent instant variables as arguments. The attr_accesor makes it easy to call the specific instant variable to access and modify.
    attr_accessor :pedal_faster, :brake
    #the initialize method is set with only one argument to pass as the othe given instant variable are provided with a default value
    def initialize (model)
        @model = model
        @wheels = 2
        @current_speed = 0
    end
    #this method provides a cleaner output as a string containing all the date in the object
    def bike_info
        "The #{@model} bike has #{@wheels} and is going #{@current_speed} mph"
    end
    #this method is set to take in a interger as an argument that will update the intstant variable as needed
    def pedal_faster (speed)
        @current_speed += speed
    end
    #this method is set to take in a interger as an argument that will update the intstant variable as needed.
    #this method also contains the enumorator .max that lets you set the condition of the speed interger to return 0 as the max to exceed.

    def brake (speed)
        @current_speed -= speed
        [@current_speed, 0].max [].max
    end
end

trek = Bike.new('Trek')
# p trek
p trek.bike_info
# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'



# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.
my_bike = Bike.new('my bike')
 p my_bike.pedal_faster(10)
 p my_bike.pedal_faster(18)
 p my_bike.brake(5)
 p my_bike.brake(25)

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0
