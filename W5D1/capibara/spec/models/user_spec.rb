require 'rails_helper'

RSpec.describe User, type: :model do
  let(:user){User.new(:email=>"aakash", :password=>"password")}

  describe "#is_password?" do


    it "verifies if the password is correct" do
      expect(user.is_password?("password")).to be true
    end
    it "wont let user login with incorrect password" do
      expect(user.is_password?("pass")).to be false
    end
  end

  describe "#reset_session_token!" do

    it "resets session token of user" do
      old_token = user.session_token
      user.reset_session_token!
      expect(user.session_token).to_not eq(old_token)
    end

    describe "::find_by_credentials" do
      before(:each) do
      user.save!
    end
    it "finds correct user" do
      expect(User.find_by_credentials("aakash","password")).to eq(user)
    end

    it "returns nil for incorrect credentials" do
      expect(User.find_by_credentials("1","2")).to eq(nil)
    end
  end
  end
  it { should validate_presence_of(:email)}
  it { should validate_presence_of(:password_digest)}
  it { should validate_presence_of(:email)}
  it { should validate_length_of(:password).is_at_least(6).on(:create)}
end
