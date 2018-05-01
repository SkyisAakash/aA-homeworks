require 'byebug'
class LRUCache

  attr_reader :array, :max
    def initialize(size)
      @array = []
      @max = size
    end

    def count
      # returns number of elements currently in cache
      @array.length
    end

    def add(el)
      # adds element to cache according to LRU principle
      @array = @array - [el]
      @array.shift if @array.length == @max
      @array << el
    end

    def show
      # shows the items in the cache, with the LRU item first
      print @array
    end

    private
    # helper methods go here!

  end

  if __FILE__ == $PROGRAM_NAME

    johnny_cache = LRUCache.new(4)

      johnny_cache.add("I walk the line")
      johnny_cache.add(5)

      johnny_cache.count # => returns 2

      johnny_cache.add([1,2,3])
      johnny_cache.add(5)
      johnny_cache.add(-5)
      johnny_cache.add({a: 1, b: 2, c: 3})
      johnny_cache.add([1,2,3,4])
      johnny_cache.add("I walk the line")
      johnny_cache.add(:ring_of_fire)
      # debugger
      johnny_cache.add("I walk the line")
      johnny_cache.add({a: 1, b: 2, c: 3})


      johnny_cache.show# => prints [[1, 2, 3, 4], :ring_of_fire, "I walk the line", {:a=>1, :b=>2, :c=>3}]
  end