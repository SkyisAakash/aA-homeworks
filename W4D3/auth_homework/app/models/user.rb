# == Schema Information
#
# Table name: users
#
#  id              :bigint(8)        not null, primary key
#  username        :string
#  password_digest :string
#  session_token   :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  validates :username, :session_token, presence: true, uniqueess: true
  validates :password_digest, presence: { mesage: "Password can't be blank" }
  validates :password_digest, length: { minimum: 4, allow_nil: true }, uniqueness: true
  before_validation :ensure_session_token
  attr_reader :password

  def self.find_by_credentials(username, password)
    #returns user
    user = User.find_by(username: username)
    if user && BCrypt::Password(user.password_digest).is_password?(password)
      return user
    end
    nil
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64(16)
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save!
    self.session_token

  end

  def ensure_session_token
    session_token ||= self.class..generate_session_token

  end

  def password=(value)
    @password = value
    self.password_digest = BCrypt::Password.create(password)
  end
end
