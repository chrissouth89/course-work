# ['one', 'two', 'three'].each do |str|
#     puts 'the value is ' + str
# end

# ['one', 'two', 'three'].each { |str| puts 'the value is ' + str } 

# times_two = [1,2,3].map do |num|
#     num * 2
# end
# p times_two


# def each(arr, &blk)
#     for elem in arr
#         blk.call(elem)
#     end
# end
            
# each 0..5 do |currentNum|
#     puts currentNum
# end

# log = Proc.new do |el|
#     puts el
# end 

# log = Proc.new {|el| puts el}

# log.call(5)

foo = Proc.new do
    puts 'hi'
end

def bar(callback)
    callback.call()
    # callback.()
end

bar(foo)
