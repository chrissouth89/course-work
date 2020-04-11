# single comment 
# long_variable_name = 1
# puts('hi')
# puts 'hi'
# p 'hi'

# some_var = gets
# puts some_var

# command_line = gets
# puts command_line

# puts "Ruby"
# puts 'Python'

# puts "Ruby".size
# # puts "Ruby".size()
# # 'ruby'.length
# puts "Ruby".upcase
# # 'ruby'.toUpperCase()
# p 23.to_s

# foo = "bar"
# puts "oh hai #{foo}"
# puts 'oh hai #{foo}'

# long_string = <<-EOF
# really really lots to say
# still have things I want to say
# oh wait...yet there is more
# EOF
# puts long_string

# a = false
# b = true 
# p a && b 
# p b || a

# puts 5 / 2
# puts 122
# puts 0x7a
# puts 0172
# puts 0b1111010
# puts 23_482_345_629

# p 5.0 / 2
# p 5.fdiv 2
# p 12.to_f
# p 1.2e-3

# puts 1.2 - 1.0
# require 'bigdecimal'
# puts BigDecimal("1.2") - BigDecimal("1.0")

# p 2.to_r
# p Rational 0.5
# p 2/3r
# p 2/3+1

# a = nil
# puts a

# light = 'on'
# p light
# light = :on
# p light

# p :name.object_id
# p :name.object_id
# p 'name'.object_id
# p 'name'.object_id

# foo = :bar
# foo = :baz
# puts foo

# p :name.methods.size
# p "name".methods.size

# a = [1,4,6]
# p a
# b = Array(1..6)
# p b
# c = Array(1...6)
# p c

# domains = {'location' => "United States"}
# domains = { 
#     'de' => "Germany", 
#     1 => "Slovakia", 
#     :us => "United States" 
# }

# p domains 
# p domains['de']
# p domains[1]
# p domains[:us]

# p true.class, false.class
# p "Ruby".class
# p 1.class
# p 4.5.class
# p 3_463_456_457.class 
# p :age.class
# p [1,2,3].class
# p({ :name => "jane", :age => 17}.class)

# p '4'.to_i
# p 4.to_s
# p 5.to_f
# p 0.5.to_r
# p "Jame".to_sym

# def h name
#     puts "Hello #{name}"
# end
# h("Matt")
# p h
# puts h.class

# a = 1
# if a > 1
#  p 'greater than 1'
# elsif a == 1
#  p 'equals 1'
# else 
#     p 'less than 1'
# end

# a = -1 
# unless a >= 1
#     p "less than 1"
# end

# a = 1
# puts 'equals 1' if a == 1
# puts 'not greater than 1' unless a > 1

# a = 0
# while a < 3 do 
#     p a
#     a += 1
# end

# for i in 0...5 do 
#     puts i
# end

# hello = 'hello'
# puts hello[0]

log = Proc.new do |el|
	puts el
end
log.call(5)