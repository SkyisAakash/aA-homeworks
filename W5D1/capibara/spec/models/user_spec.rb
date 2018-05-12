require 'rails_helper'

RSpec.describe User, type: :model do

  describe "#is_password?" do

      let(:user){User.new(:email=>"aakash", :password=>"password")}

    it "verifies if the password is correct" do
      expect(user.is_password?("password")).to be true
    end
    it "wont let user login with incorrect password" do
      expect(user.is_password?("pass")).to be false
    end
  end
  it { should validate_presence_of(:email)}
  it { should validate_presence_of(:password_digest)}
  it { should validate_presence_of(:email)}
  it { should validate_length_of(:password).is_at_least(6).on(:create)}
end
