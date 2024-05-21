import Link from "next/link";
import "./style.css";

function Form({
  type,
  post,
  setPost,
  submitting,
  handleSubmit,
}: {
  type: string;
  post: any;
  setPost: any;
  submitting: any;
  handleSubmit: any;
}) {
  return (
    <section className="w-full">
      <div className="md:w-[80%] w-[90%] mx-auto py-[4rem]">
        <header className="w-[60%]">
          <h2 className="font-bold text-[38px] text-[#006b80]">{type} Post</h2>
          <p className="text-slate-600">
            {type} and share amazing prompts with the world, and let your
            imagination run wild with any AI-powered platform
          </p>
        </header>

        <form>
          <div>
            <label htmlFor="prompt">Your AI Prompt</label>
            <textarea
              value={post}
              name="prompt"
              id="prompt"
              placeholder="write your prompt here...."
              className="border-slate-300 border-[1.5px] "
              onChange={(e) => setPost(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="tag">
              Tag <span className="text-[12px]">(#web, #coding, #design)</span>
            </label>
            <input
              type="text"
              name="tag"
              id="tag"
              placeholder="#tag"
              className="border-slate-300 border-[1.5px] text-[15px]"
            />
          </div>

          <div className="flex items-end justify-end">
            <div className="flex items-center gap-x-[10px]">
              <Link href="/" className="hover:text-[#006b80] text-[15px]">
                Cancel
              </Link>
              <button onClick={handleSubmit} className="text-[15px] bg-orange-500 py-[7px] px-[10px] rounded-full text-white min-w-[70px]">
                {submitting ? `${type}....` : type}
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Form;
