import type { NextPage } from "next";
import { ChangeEvent, useState } from "react";
import { Block } from "../components/InputBlock/Block/Block";
import { PageWrapper } from "../components/Wrapper/Wrapper";
import { hasher } from "../helper";

const Blockchain: NextPage = () => {
  // pre-calculated hashes for each block
  const [blocks, setBlocks] = useState<IBlock[]>([
    {
      id: 1,
      data: "",
      nonce: "11316",
      hash: "000015783b764259d382017d91a36d206d0600e2cbb3567748f46a33fe9297cf",
    },
    {
      id: 2,
      data: "",
      nonce: "35230",
      hash: "000012fa9b916eb9078f8d98a7864e697ae83ed54f5146bd84452cdafd043c19",
    },
    {
      id: 3,
      data: "",
      nonce: "12937",
      hash: "0000b9015ce2a08b61216ba5a0778545bf4ddd7ceb7bbd85dd8062b29a9140bf",
    },
    {
      id: 4,
      data: "",
      nonce: "35990",
      hash: "0000ae8bbc96cf89c68be6e10a865cc47c6c48a9ebec3c6cad729646cefaef83",
    },
    {
      id: 5,
      data: "",
      nonce: "56265",
      hash: "0000e4b9052fd8aae92a8afda42e2ea0f17972ea67cead67352e74dd6f7d217c",
    },
  ]);

  const setHash = (id: number, value: string) => {
    setBlocks((state) => [
      ...state.filter((el) => el.id !== id),
      {
        ...state.find((el) => el.id === id),
        hash: value,
      } as IBlock,
    ]);
  };

  const onDataChange = (id: number, e: ChangeEvent<HTMLTextAreaElement>) => {
    const block = blocks.find((el) => el.id === id) as IBlock;
    setBlocks((state) => [
      ...state.filter((el) => el.id !== id),
      {
        ...block,
        data: e.target.value,
        hash: hasher([
          block.id.toString(),
          block.nonce.toString(),
          e.target.value,
          id === 1 ? "0".repeat(64) : blocks[id - 2].hash,
        ]),
      } as IBlock,
    ]);
  };

  const onNonceChange = (id: number, e: ChangeEvent<HTMLInputElement>) => {
    const block = blocks.find((el) => el.id === id) as IBlock;
    setBlocks((state) => [
      ...state.filter((el) => el.id !== id),
      {
        ...block,
        nonce: e.target.value,
        hash: hasher([
          block.id.toString(),
          e.target.value,
          block.data,
          id === 1 ? "0".repeat(64) : blocks[id - 2].hash,
        ]),
      } as IBlock,
    ]);
  };

  const setNonce = (id: number, value: string) => {
    const block = blocks.find((el) => el.id === id) as IBlock;
    setBlocks((state) => [
      ...state.filter((el) => el.id !== id),
      {
        ...block,
        nonce: value,
        hash: hasher([
          block.id.toString(),
          value,
          block.data,
          id === 1 ? "0".repeat(64) : blocks[id - 2].hash,
        ]),
      } as IBlock,
    ]);
  };

  return (
    <PageWrapper
      title="Blockchain"
      subtitle="Changing any data invalidates the following blocks in the chain, you'll have to mine each of them from start to finish."
    >
      <div className="px-3 md:px-6 pb-8 flex flex-row gap-6 overflow-x-scroll">
        {blocks
          .sort((a, b) => a.id - b.id)
          .map((block) => (
            <div key={block.id} className="basis-1/4">
              <Block
                {...block}
                onDataChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                  onDataChange(block.id, e)
                }
                onNonceChange={(e: ChangeEvent<HTMLInputElement>) =>
                  onNonceChange(block.id, e)
                }
                setNonce={(value) => setNonce(block.id, value)}
                blocks={blocks}
                setHash={(value) => setHash(block.id, value)}
              />
            </div>
          ))}
      </div>
    </PageWrapper>
  );
};

export default Blockchain;
