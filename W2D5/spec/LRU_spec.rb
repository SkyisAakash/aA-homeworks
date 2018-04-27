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
end
