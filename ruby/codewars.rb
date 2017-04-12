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