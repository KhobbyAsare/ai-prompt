import PromptCard from "@/components/promptsCard/promptCard";
import "./style.css";

function Profile() {
  return (
    <section className="w-full">
      <div className="md:w-[80%] w-[90%] mx-auto pt-[4rem]">
        <header>
          <h1 className="font-bold text-[38px] profile">My Profile</h1>
          <div className="md:w-[70%] w-[95%]">
            <p className="text-slate-600">
              Welcome to your personalized profile page. Share your exceptional
              prompts and inspire others with the power of your imagination
            </p>
          </div>
        </header>

        <PromptCard />
      </div>
    </section>
  );
}

export default Profile;
