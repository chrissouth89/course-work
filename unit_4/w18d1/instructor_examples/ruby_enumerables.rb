# nums =  [1,2,3,4,5].select { |i| i > 3 }
# p nums

# nums =  [1,2,3,4,5].detect { |i| i > 3 }
# p nums

# nums =  [1,2,3,4,5].reject { |i| i > 3 }
# p nums

# p [1,3,5,10,15].grep (1..10)
# p [0.3, "three", :three, "thirty-three"].grep /three/
# p [0.3, "three", :three, "thirty-three"].grep /^three/
# p [0.3, "three", :three, "thirty-three"].grep /three$/

# p [1,3,5,10,15].grep (1..5) {|i| i * 3}
# p [1,3,5,10,15].grep (1..5) {|i| i *  3}

# p ['squirtle', 'mew', 'charmeleon', 'pikachu'].sort
# p ['squirtle', 'mew', 'charmeleon', 'pikachu'].sort_by { |word| word.length}
# p [2, 5, 1, 3].sort

# p [2, "hello", 1, "what"].sort 
# p [2, "what", 1, "hello"].sort_by(:to_i&)
# p [2, "what", 1, "hello"].sort_by(&:to_s)

# p %w(mew pikachu).any? { |word| word.length <= 3 }

# p %w(mew pikachu).all? { |word| word.length <= 3 }
# p %w(mew cat her the).all? { |word| word.length <= 3 }

# p (1..3).reduce(:+) 
# p (1..4).reduce(:*)
# p [5, 6, 7].reduce(5, :+)
