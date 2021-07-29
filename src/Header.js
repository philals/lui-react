import React, { useEffect, useState } from "react";
import {
  LuiDrawerMenuDivider,
  LuiDrawerMenuOption,
  LuiDrawerMenuSection,
  LOLUserContext,
  LOLFirmSwitcherMenu
} from "@linzjs/lui";
import { LOLLogoutLink } from "@linzjs/lui";
import { LuiHeader, LuiHeaderMenuItem } from "@linzjs/lui";
import { LOLDrawerMenuFirmSwitcher } from "@linzjs/lui";
import { LOLCommonDrawerMenu, LOLDrawerMenu } from "@linzjs/lui";

const createUser = (firms) => ({
  id: "bdennis003",
  idHash: "bd***003_ENCODED_ID",
  email: "bryan_dennise@test.linz.govt.nz",
  givenNames: "Bryan",
  surname: "Dennis",
  loginType: "EXTERNAL",
  preferredName: "Bry",
  firms,
  passwordChangeRequired: false,
  roles: [],
  lastLogin: "2021-03-17T10:08:19"
});

const multiFirmUser = createUser([
  {
    name: "LINZ National Operations",
    id: "pa-inc",
    privileges: []
  },
  {
    name: "Cheese Inc",
    id: "cheese-inc",
    privileges: []
  },
  {
    name: "Apple Inc",
    id: "apple-inc",
    privileges: []
  }
]);

export const userIsInternal = (user) => {
  const loginType = (user?.loginType).code || user?.loginType;
  return loginType === "INTN";
};

export function Header() {
  const user = { ...multiFirmUser };
  user.loginType = "EXTN";
  user.firms = userIsInternal(user) ? [] : user.firms;

  const [selectedFirm, setSelectedFirm] = useState(
    userIsInternal(user) ? undefined : user.firms[0]
  );

  const gotoExample = () => {
    window.location.assign("/example");
  };

  return (
    <>
      <LuiHeader size={"normal"}>
        <LOLUserContext.Provider
          value={{
            user,
            selectedFirm,
            changeFirm: (firm) =>
              setSelectedFirm(user.firms.find((e) => e.id === firm)),
            isInternal: () => userIsInternal(user),
            hasAnyPrivilege: () => true
          }}
        >
          <LOLFirmSwitcherMenu hide={{ upto: "md" }} />
          <LOLCommonDrawerMenu
            path="/search/somepath"
            enableNOCLink={true}
            enableSurveyLink={true}
            enableTitlesLink={true}
            appSpecificSections={
              <LuiDrawerMenuSection title="App specific section">
                <div style={{ padding: "8px" }}>
                  This is an example of menu customization.
                </div>
              </LuiDrawerMenuSection>
            }
            appSpecificLinks={
              <>
                <LuiDrawerMenuOption
                  label="Example 1"
                  onClick={() => {
                    gotoExample();
                  }}
                />
                <LuiDrawerMenuOption
                  label="Example 2"
                  onClick={() => {
                    gotoExample();
                  }}
                />
                <LuiDrawerMenuDivider />
                <LuiDrawerMenuOption
                  label="Example 3"
                  onClick={() => {
                    gotoExample();
                  }}
                />
              </>
            }
          />
        </LOLUserContext.Provider>
      </LuiHeader>
    </>
  );
}
