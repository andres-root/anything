class Anything
  def say_hi
    @say_hi ||= "Surprise motherfucker!"
  end
  
   
  def debugconsole
    p "Console is that you ?"       
    puts "Yeah!"
  end
end

describe Anything do
  it "returns a greeting message" do
    expect(subject.say_hi).to eq("Surprise motherfucker!")
  end
end
