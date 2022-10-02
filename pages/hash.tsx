import { NextPage } from "next";
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

  return (
    <PageWrapper title="SHA256 Hash">
      <div className="px-32">
        <InputBlock>
          <Textarea label="Data" value={value} onChange={handleChange} />
          <ReadOnly label="Hash" value={hash} />
        </InputBlock>
      </div>
    </PageWrapper>
  );
};

export default Hash;
