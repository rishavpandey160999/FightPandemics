import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import ConfirmedCases from "../components/NearestHospital/ConfirmedCases";
import Sidebar from "../components/NearestHospital/HospitalSidebar";
import HealthFacilities from "../components/NearestHospital/HealthFacilities";
import { withRouter } from "react-router-dom";
import { theme, mq } from "../constants/theme";
import { useTranslation } from "react-i18next";
import { WhiteSpace } from "antd-mobile";

const { white, offWhite, royalBlue } = theme.colors;

const NearestHospitalContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${offWhite};
  display: flex;
  @media screen and (max-width: ${mq.phone.wide.maxWidth}) {
    display: block;
    background-color: ${white};
  }
`;

const NearestHospitalSideBar = styled.div`
  flex-basis: 25%;
  background-color: ${white};
  min-height: 100vh;
  padding-right: 3.5rem;
  @media screen and (max-width: ${mq.phone.wide.maxWidth}) {
    display: none;
  }
  @media screen and (max-width: ${mq.tablet.wide.maxWidth}) {
    padding-right: 1rem;
  }
`;

const NearestHospitalContentBox = styled.div`
  flex: 1;
  min-height: 100vh;
  padding: 5rem;
  @media screen and (max-width: ${mq.phone.wide.maxWidth}) {
    padding: 0;
  }
`;

const ActiveLinkStyles = {
  fontWeight: "bold",
  borderLeft: `4px solid ${royalBlue}`,
  padding: ".4rem 2rem",
};

const NearestHospitalLayout = () => {
  const [isMobile, setMediaQuery] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    setMediaQuery(mediaQuery.matches);
    const listenerFunc = (query) => {
      setMediaQuery(query.currentTarget.matches);
    };
    window.matchMedia(mq.phone.wide.max).addListener(listenerFunc);
  }, []);

  const [page, setPage] = useState("nearest-hospital");
  const setCurrentPage = (pageName) => {
    setPage(pageName);
  };

  const hidingSideBar = true;

  const renderChildComponents = () => {
    if (isMobile) {
      return (
        <div>
          <HealthFacilities />
        </div>
      );
    } else {
      return (
        <div>
          {page === "nearest-hospital" ? (
            <HealthFacilities />
          ) : (
            <ConfirmedCases />
          )}
        </div>
      );
    }
  };

  return (
    <NearestHospitalContainer>
      {!hidingSideBar ? (
        <NearestHospitalSideBar>
          <Sidebar>
            <ul>
              <li>
                <NavLink
                  onClick={(pageName) => setCurrentPage("nearest-hospital")}
                  activeStyle={
                    page === "nearest-hospital" ? ActiveLinkStyles : null
                  }
                  to="#"
                >
                  {t("nearestHsp.healthFacilities")}
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={(pageName) => setCurrentPage("confirmed-cases")}
                  activeStyle={
                    page === "confirmed-cases" ? ActiveLinkStyles : null
                  }
                  to="#"
                >
                  {t("nearestHsp.confirmedCases")}
                </NavLink>
              </li>
            </ul>
          </Sidebar>
        </NearestHospitalSideBar>
      ) : (
        <WhiteSpace />
      )}
      <NearestHospitalContentBox>
        {renderChildComponents()}
      </NearestHospitalContentBox>
    </NearestHospitalContainer>
  );
};

export default withRouter(NearestHospitalLayout);
