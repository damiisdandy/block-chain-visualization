import { NextPage } from "next";
import { ChangeEventHandler, useEffect, useMemo, useState } from "react";
import { Block as SingleBlock } from "../components/InputBlock/Block/Block";
import { PageWrapper } from "../components/Wrapper/Wrapper";
import { hasher } from "../helper";

const Block: NextPage = () => {
  const [nonce, setNonce] = useState<string>("72608");
  const [data, setData] = useState<string>("");

  const onNonceChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setNonce(e.target.value);
  };

  const onDataChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setData(e.target.value);
  };

  const hash = useMemo(() => hasher(["1", nonce, data]), [nonce, data]);

  return (
    <PageWrapper
      title="Block"
      subtitle="Changing the data invalidates the block, you'd have to mine it to get a valid hash."
    >
      <div className="px-3 md:px-32">
        <SingleBlock
          onDataChange={onDataChange}
          onNonceChange={onNonceChange}
          data={data}
          setNonce={setNonce}
          id={1}
          nonce={nonce}
          hash={hash}
        />
      </div>
    </PageWrapper>
  );
};

export default Block;
