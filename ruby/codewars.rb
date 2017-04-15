# Simple, remove the spaces from the string, then return the resultant string.

def no_space(x)
  return x.delete(' ')
end
puts no_space('8 j 8   mBliB8g  imjB8B8  jl  B')


# Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.
#
# The binary number returned should be a string.


def add_binary(a,b)
  sum = a+ b
  return sum.to_s(2)
end

add_binary(1,1)
add_binary(51,12)

#
# Create a method all which takes an array and a predicate (function pointer), and returns true if the predicate returns true for every element in the array. Otherwise, it should return false. If the array is empty, it should return true, since technically nothing failed the test.
#
# Here's a (Ruby) resource if you get stuck: http://www.rubycuts.com/enum-all

# easy way
def all? array, &block
  array.all?(&block)
end
# my way
def all? array, &block
  return true if array.empty?
  resualt = true
  array.each do |item|
    unless block.call(item)
      resualt = false
    end
    return resualt

end



# Implement a method that accepts 3 integer values a, b, c. The method should return true if a triangle can be built with the sides of given length and false in any other case.
#
# (In this case, all triangles must have surface greater than 0 to be accepted).
# My way
def isTriangle(a,b,c)
  if a > 0 && b > 0 && c > 0
      array = [a,b,c]
      array = array.sort
      if array[0]+array[1] > array[2]
        return true
      else
        return false
      end
  else
      return false
  end
end


# Whaatt -_0

def isTriangle(a,b,c)
   a, b, c = [a, b, c].sort
   a + b > c
end

#
# Description:
#
# Your task is to create a function - basic_op().
#
# The function should take three arguments - operation(string/char), value1(number), value2(number). The function should return result of numbers after applying the chosen operation.

# my solution -_-
def basic_op(operator, value1, value2)
 case operator
 when  "+"
   return value1 + value2
 when  "-"
  return value1 - value2
 when  "/"
  return value1 / value2
 when "*"
  return value1 * value2
 end
end
# best way
def basic_op(operator, value1, value2)
  value1.send (operator, value2)
end



# discription
# Invert a given list of integer values.
#
# Python/JS/PHP:
#
# invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
# invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
# invert([]) == []

# solution
# My solution :)
def invert(list)
invertlist = []
  list.each do |x|
    invertlist.push(- x)
  end
  return invertlist
end

# best
def invert(list)
  list.map(&:-@)
end
# or
def invert(list)
  list.map { |x| x * -1 }
end



# Description:
#
# This series of katas will introduce you to basics of doing geometry with computers.
#
# Point objects have x and y attributes.
#
# Write a function calculating distance between Point a and Point b.
#
# Tests round answers to 6 decimal places.

# my solution :) :)
def distance_between_points(a, b)
    return Math.sqrt((a[0] - b[0])**2 + (a[1] - b[1])**2 )
end

# others 0_o

def distance_between_points(a,b)
  distance = 0
  a.each_with_index do |a, index|
    distance += (a - b[index]) **2
  end
  Math.sqrt(distance)
end

# Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
  # -_- mine
def even_or_odd(number)
   number % 2 == 0 ? (return "Even") : (return "Odd")
end


# others :)
def even_or_odd(number)
  number.even? ? "Even" : "Odd"
end


# Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
# :)

def remove_exclamation_marks(s)
  s.delete("!")
end





# Write a function called repeatStr which repeats the given string string exactly n times.
#
# repeatStr(6, "I") // "IIIIII"
# repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"
def repeat_str (n, s)
   s * n
end



# Convert a string to an array
# Description:
#
# Write a function to split a string and convert it into an array of words.
#
# e.g.
#
# string_to_array("Robin Singh") => ["Robin", "Singh"]
#
# string_to_array("I love arrays they are my favorite") => ["I", "love", "arrays", "they", "are", "my", "favorite"]
#
# Note: in Javascript the function is written in camelCase as 'stringToArray'
def string_to_array(string)
  string.split(" ")
end

# Return the closest number multiple of 10
def closest_multiple_10(i)
  i.round(-1)
end
