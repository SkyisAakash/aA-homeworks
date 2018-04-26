def sluggish(array)
  biggest = ""
  (0..array.length-1).each do |i|
    (0..array.length-1).each do |j|
       biggest = array[i] > array[j] ? array[i] : array[j]
     end
   end
   biggest
end
require 'byebug'
class Array

  def merge_sort(&prc)
    # debugger
    return self if self.length <= 1
    prc ||= Proc.new { |x, y| x <=> y }
    middle = length/2
    left = self[0..middle-1]
    right = self[middle..-1]
    left_sorted = left.merge_sort(&prc)
    right_sorted = right.merge_sort(&prc)
    Array.merge(left_sorted, right_sorted, &prc)
  end

  def self.merge(left, right, &prc)
    ans = []
    until left.empty? || right.empty?
      case prc.call(left[0], right[0])
      when 0
        ans << left.shift
      when 1
        ans << right.shift
      when -1
        ans << left.shift
      end
    end
    ans.concat(left)
    ans.concat(right)
    ans
  end

end

def dominant(array)
  array.merge_sort { |x, y| x.length <=> y.length}[-1]
end

def clever(array)
  longest = ""
  array.each { |el| longest = el if el.length > longest.length }
  longest
end

if __FILE__ == $PROGRAM_NAME
  array = ['fish', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish', 'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh']
# p sluggish(array)
# p [5,4,3,2,1].merge_sort
# p dominant(array)
p clever(array)
end
