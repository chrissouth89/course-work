# def get_name 
#     name = gets.chomp
#     p name
# end
# get_name

# Reverse It
def reverseIt(word)
    return word.reverse
end
# puts reverseIt("a man, a plan, a canal, frenemies!")

def reverse_it(string)
    reverse = ""
    for i in 0...string.length do
        reverse = reverse + string[string.length - (i+1)]
    end
    return reverse
end
# puts reverse_it("example")

# Swap Em
# a = 10
# b = 30
# a,b = b,a
# puts a
# puts b

# def swapEm(a,b)
#     temp = a
#     a = b
#     b = temp
#     return a,b
# end
# puts swapEm "Bear", "hug"

# Multiply Array

# def multiply_array ary
#     total = 1
#     if ary.size == 0
#         return 1
#     elsif ary.size > 0
#         ary.each do |i|
#             total *= i
#         end
#         return total
#     end
# end
# puts multiply_array([1,2,3,4])

# def multiply_array(ary)
#     if ary.length == 0
#         return 1
#     end
#     total = 1
#     for i in ary do
#         total = total * i
#     end
#     puts total
# end
# testarray = [3, 4, 2]
# multiply_array(testarray)

# ary = (1..20)
# ary.each do |x| 
#     result = x * 2
#     p result
# end

# Fizz Buzzer
def fizz_buzzer input_number
    if (input_number % 3 == 0) && (input_number % 5 == 0)
        puts "fizzbuzz"
    elsif input_number % 3 == 0
        puts "fizz"
    elsif input_number % 5 == 0
        puts "buzz"
    elsif
        puts "no joy"
    end
end
fizz_buzzer(15)
fizz_buzzer(3)
fizz_buzzer(5)
fizz_buzzer(10)
fizz_buzzer(14)


