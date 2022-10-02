import { NextPage } from "next";
import { useRouter } from "next/router";
import { ChangeEventHandler, useMemo, useState } from "react";
import { InputBlock } from "../components/InputBlock/InputBlock";
import { ReadOnly } from "../components/Inputs/ReadOnly/ReadOnly";
import { Textarea } from "../components/Inputs/Textarea/Textarea";
import { PageWrapper } from "../components/Wrapper/Wrapper";
import { hasher } from "../helper";

const Hash: NextPage = () => {
  const [value, setValue] = useState("");
  const handleChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setValue(e.target.value);
  };

  const hash = useMemo<string>(() => hasher([value]), [value]);

  const { push } = useRouter();

  return (
    <PageWrapper
      title="SHA256 Hash"
      subtitle="Changing the data generates a new hash."
    >
      <div className="px-3 md:px-32">
        <InputBlock>
          <Textarea label="Data" value={value} onChange={handleChange} />
          <ReadOnly label="Hash" value={hash} />
        </InputBlock>
        <button
          onClick={() => push("/block")}
          className="mt-5 bg-slate-700 text-white font-semibold rounded-md px-8 py-2 transform hover:scale-110 active:scale-90 transition-transform ease-in-out"
        >
          Next
        </button>
      </div>
    </PageWrapper>
  );
};

export default Hash;
