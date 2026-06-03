import MainLayout from "../layouts/MainLayout";

import WelcomeCard from "../components/WelcomeCard";

import StatsCards from "../components/StatsCards";

import CountdownCard from "../components/CountdownCard";

import NextMatches from "../components/NextMatches";

const Dashboard = () => {
  return (
    <MainLayout>
      <div className="container-fluid mt-4 px-2 px-lg-4 pb-5 mb-5">
        <CountdownCard />
        {/* Bienvenida */}

        <WelcomeCard />

        {/* Stats */}

        <StatsCards />

        {/* Próximos partidos */}

        <NextMatches />
      </div>
    </MainLayout>
  );
};

export default Dashboard;
