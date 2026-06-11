import MainLayout from "../layouts/MainLayout";

import WelcomeCard from "../components/WelcomeCard";

import StatsCards from "../components/StatsCards";

import CountdownCard from "../components/CountdownCard";

import NextMatches from "../components/NextMatches";

import TournamentRules from "../components/TournamentRules";

const Dashboard = () => {
  return (
    <MainLayout>
      <div className="container-fluid mt-4 px-2 px-lg-4 pb-5 mb-5">
        {/* Bienvenida */}

        <WelcomeCard />

        {/* Stats */}

        <StatsCards />

        <TournamentRules />

        {/* Próximos partidos */}

        <NextMatches />
      </div>
    </MainLayout>
  );
};

export default Dashboard;
