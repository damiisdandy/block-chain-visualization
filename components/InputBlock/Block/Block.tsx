import {
  ChangeEventHandler,
  FC,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { FaLink } from "react-icons/fa";
import { hasher } from "../../../helper";
import { Input } from "../../Inputs/Input/Input";
import { ReadOnly } from "../../Inputs/ReadOnly/ReadOnly";
import { Textarea } from "../../Inputs/Textarea/Textarea";
import { InputBlock } from "../InputBlock";

interface BlockProps extends IBlock {
  onNonceChange: ChangeEventHandler<HTMLInputElement>;
  setNonce: (value: string) => void;
  onDataChange: ChangeEventHandler<HTMLTextAreaElement>;
  blocks?: IBlock[];
  setHash?: (value: string) => void;
}

export const Block: FC<BlockProps> = ({
  id,
  nonce,
  data,
  onDataChange,
  onNonceChange,
  hash,
  blocks,
  setNonce,
  setHash,
}) => {
  const [loading, setLoading] = useState(false);

  const isValid = useMemo<boolean>(() => hash.startsWith("0000"), [hash]);

  const prevHash = useMemo<string>(
    () => (blocks ? (id === 1 ? "0".repeat(64) : blocks[id - 2].hash) : ""),
    [id, blocks]
  );

  const mine = useCallback(async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 10));
    let newValue = 0;
    while (
      !hasher([id.toString(), newValue.toString(), data, prevHash]).startsWith(
        "0000"
      )
    ) {
      newValue++;
    }
    setNonce(newValue.toString());
    setLoading(false);
  }, [setNonce, id, data, prevHash]);

  useEffect(() => {
    setHash?.(hasher([id.toString(), nonce.toString(), data, prevHash]));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prevHash]);

  return (
    <InputBlock isBlock isValid={isValid}>
      {id !== 5 && blocks && (
        <FaLink className="text-3xl absolute right-0 top-1/2 transform translate-x-full -translate-y-1/2 rotate-45" />
      )}
      <ReadOnly label="Block" value={id} />
      <Input value={nonce} onChange={onNonceChange} label="Nonce" />
      <Textarea value={data} onChange={onDataChange} label="Data" />
      {blocks && <ReadOnly label="Prev" value={prevHash} />}
      <ReadOnly label="Hash" value={hash} />
      <p className="text-xs -mt-4 text-gray-500">
        Each mine ensures the hash starts with <b>0000</b> by updating the{" "}
        <b>nonce</b>
      </p>
      <button
        onClick={mine}
        type="button"
        disabled={loading}
        className="px-8 py-2 disabled:opacity-80 transform hover:scale-105 active:scale-95 transition-all ease-in-out bg-slate-600 rounded-md text-white w-fit self-end"
      >
        {loading ? "Mining..." : "Mine"}
      </button>
    </InputBlock>
  );
};
