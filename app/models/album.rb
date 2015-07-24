class Album < ActiveRecord::Base
  belongs_to :user
  belongs_to :list
  acts_as_votable
end
