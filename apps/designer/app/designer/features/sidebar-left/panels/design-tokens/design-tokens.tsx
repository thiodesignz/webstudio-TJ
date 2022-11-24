import { TokensIcon } from "@webstudio-is/icons";
import { DesignTokensManager } from "~/designer/shared/design-tokens-manager";
import { TabName } from "../../types";
import { Header, CloseButton } from "../../lib/header";

export const TabContent = ({
  onSetActiveTab,
}: {
  onSetActiveTab: (tabName: TabName) => void;
}) => {
  return (
    <>
      <Header
        title="Design Tokens"
        suffix={<CloseButton onClick={() => onSetActiveTab("none")} />}
      />
      <DesignTokensManager />
    </>
  );
};

export const icon = <TokensIcon />;
