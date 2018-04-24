require 'byebug'
class Board
  attr_accessor :cups

  def initialize(name1, name2)
    @cups = Array.new(14) {Array.new}
    @player1 = name1
    @player2 = name2
    place_stones
  end

  def place_stones
    cups.each_with_index do |cup, idx|
        4.times {cup << :stone} unless idx == 6 || idx == 13
      end
    # helper method to #initialize every non-store cup with four stones each
  end

  def valid_move?(start_pos)
      raise RuntimeError.new "Invalid starting cup" unless (1..13).cover?(start_pos)
  end

  def make_move(start_pos, current_player_name)
     # byebug
     stones_to_distribute = @cups[start_pos]
     @cups[start_pos] = []
     next_cup = start_pos
     # opposite_player_cup = (side ==  1)? 13:6
     until stones_to_distribute.empty?
       next_cup += 1
       next_cup = 0 if next_cup > 13
       if next_cup == 6
         @cups[next_cup]  << stones_to_distribute.shift if current_player_name == @player1
       elsif next_cup == 13
         @cups[next_cup]  << stones_to_distribute.shift if current_player_name == @player2
       else
         @cups[next_cup] << stones_to_distribute.shift
       end
        end
  render
  next_turn(next_cup)
  end

  def next_turn(ending_cup_idx)
    return :prompt if ending_cup_idx == 6 || ending_cup_idx == 13
    return :switch if @cups[ending_cup_idx].length == 1
    return ending_cup_idx

    # helper method to determine what #make_move returns
  end

  def render
    print "      #{@cups[7..12].reverse.map { |cup| cup.count }}      \n"
    puts "#{@cups[13].count} -------------------------- #{@cups[6].count}"
    print "      #{@cups.take(6).map { |cup| cup.count }}      \n"
    puts ""
    puts ""
  end

  def one_side_empty?
    return true if (cups[0..6].all? {|el| el.empty?} || cups[0..6].all? {|el| el.empty?})
    return false
  end

  def winner
    return :draw if cups[6].length == cups[13].length
    return (cups[6].length > cups[13].length)? @player1 : @player2
  end
end
