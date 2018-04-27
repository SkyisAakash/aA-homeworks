require 'rspec'
require 'LRU.rb'

describe LRUCache do
  subject(:cache) { LRUCache.new(4) }
  describe "#initialize" do
    it "initializes cache with an empty cache of given size" do
      expect(cache.array).to eq([])
      expect(cache.max). to eq(4)
    end
  end

  describe "#count" do
    it "returns number of elements in cache" do
      expect(cache.count).to eq(0)
    end
  end

  describe "#add" do
    context "adds passed element according to cache principle i.e. it" do
      before(:each) do
        cache.add("I walk the line")
        cache.add(5)
      end

      it "adds passed element to the cache" do
        expect(cache.count).to eq(2)
        expect(cache.array[1]).to eq(5)
      end

      it "saves most recent elements on top (w/o repetation)" do
        cache.add("I walk the line")
        expect(cache.array[-1]).to eq("I walk the line")
      end

      it "removes least used elements if new elements are added to a full stack" do
        cache.add([1,2,3])
        cache.add(5)
        cache.add(-5)
        cache.add({a: 1, b: 2, c: 3})
        cache.add([1,2,3,4])
        cache.add("I walk the line")
        cache.add(:ring_of_fire)
        cache.add("I walk the line")
        cache.add({a: 1, b: 2, c: 3})
        expect(cache.array).to eq([[1, 2, 3, 4], :ring_of_fire, "I walk the line", {:a=>1, :b=>2, :c=>3}])
      end
    end
  end

  describe "#show" do
    it "prints out the cache array" do
      expect { cache.show }.to output("[]").to_stdout
      cache.add("I walk the line")
      cache.add(5)
      expect { cache.show }.to output("[\"I walk the line\", 5]").to_stdout
    end
  end
end
