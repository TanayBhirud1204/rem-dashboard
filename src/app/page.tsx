import { studentsData } from "@/lib/data";
import { MetricCard } from "@/components/MetricCard";
import { Users, FileText, CheckCircle2, TrendingUp, Cpu, Award } from "lucide-react";
import { AssignmentCard } from "@/components/AssignmentCard";

export default function Home() {
  // Triggering nextjs reload
  const allStudents = Object.values(studentsData);
  const totalStudents = allStudents.length;
  
  const allAssignments = allStudents.flatMap(s => s.assignments);
  const totalAssignments = allAssignments.length;
  
  const avgCompletion = Math.round(
    allStudents.reduce((acc, s) => acc + s.completionRate, 0) / totalStudents
  );
  
  const avgScore = Math.round(
    allAssignments.reduce((acc, a) => acc + a.score, 0) / totalAssignments
  );

  return (
    <div className="pb-24">
      {/* Sticky Top Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-[#FFFFEA]/90 backdrop-blur-md border-b border-[#D8D8D8] z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-[#FF5E5B] text-white p-1.5 rounded-lg">
              <FileText size={20} />
            </div>
            <span className="font-bold text-xl text-[#333333]">REM Portfolio</span>
          </div>
          <div className="hidden sm:flex items-center gap-6 text-[#A3A3A3] font-medium text-sm">
            <a href="#overview" className="hover:text-[#FF5E5B] transition-colors">Overview</a>
            <a href="#om-badade" className="hover:text-[#FF5E5B] transition-colors">Om Badade</a>
            <a href="#tanay-bhirud" className="hover:text-[#FF5E5B] transition-colors">Tanay Bhirud</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 text-center max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-extrabold text-[#333333] mb-6 tracking-tight">
           We Are <span className="text-[#FF5E5B]">Builders.</span>
        </h1>
        <p className="text-lg text-[#A3A3A3] mb-10 leading-relaxed">
          Welcome to our assignment portfolio. We are Om Badade and Tanay Bhirud, and this space showcases our technical submissions, performance metrics, and educational journey.
        </p>
        <div className="flex items-center justify-center gap-4">
          <a href="#om-badade" className="px-6 py-3 bg-[#00CECB] hover:bg-[#00B5B3] text-white font-bold rounded-xl shadow-lg shadow-[#00CECB]/30 transition-all hover:-translate-y-0.5">
            View Om's Portfolio
          </a>
          <a href="#tanay-bhirud" className="px-6 py-3 bg-[#FFED66] hover:bg-[#E5CD3A] text-[#333333] font-bold rounded-xl shadow-lg shadow-[#FFED66]/30 transition-all hover:-translate-y-0.5">
            View Tanay's Portfolio
          </a>
        </div>
      </section>

      {/* Class Overview */}
      <section id="overview" className="scroll-mt-24 mb-20 bg-white p-8 rounded-3xl border border-[#D8D8D8] shadow-sm">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-[#333333]">Class Overview</h2>
          <p className="text-[#A3A3A3] mt-2 font-medium">Combined KPIs for our submissions</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <MetricCard title="Total Students" value={totalStudents} icon={<Users size={24} />} delay={0.1} />
          <MetricCard title="Total Submissions" value={totalAssignments} icon={<FileText size={24} />} delay={0.2} />
          <MetricCard title="Avg. Completion" value={avgCompletion} suffix="%" icon={<CheckCircle2 size={24} />} delay={0.3} />
          <MetricCard title="Avg. Score" value={avgScore} prefix="~" icon={<TrendingUp size={24} />} delay={0.4} />
        </div>
      </section>

      {/* Dynamic Student Mapping */}
      {allStudents.map((student) => {
        const studentAvgScore = Math.round(
          student.assignments.reduce((acc, a) => acc + a.score, 0) / student.assignments.length
        );
        const totalComplexity = student.assignments.reduce((acc, a) => acc + a.complexity, 0);

        return (
          <section id={student.id} key={student.id} className="scroll-mt-24 mb-24 relative">
            {/* Student Header */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4 border-b border-[#D8D8D8] pb-6">
              <div>
                <h1 className="text-4xl font-extrabold text-[#333333] mb-2">{student.name}</h1>
                <p className="text-[#A3A3A3] font-bold tracking-widest uppercase text-sm">Roll No: <span className="text-[#FF5E5B]">{student.rollNo}</span></p>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00CECB]/10 text-[#00CECB] rounded-full border border-[#00CECB]/20 font-bold self-start sm:self-auto">
                <Award size={20} />
                Student Profile
              </div>
            </div>

            {/* Student KPIs */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <MetricCard title="Overall Score" value={studentAvgScore} icon={<TrendingUp size={24} />} delay={0.1} />
              <MetricCard title="Completion Rate" value={student.completionRate} suffix="%" icon={<CheckCircle2 size={24} />} delay={0.2} />
              <MetricCard title="Code Complexity" value={totalComplexity} icon={<Cpu size={24} />} delay={0.3} />
            </div>

            {/* Student Assignments */}
            <div>
              <h3 className="text-2xl font-bold text-[#333333] mb-6">Submissions</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {student.assignments.map((assignment, index) => (
                  <AssignmentCard key={assignment.id} assignment={assignment} delay={0.1 + index * 0.1} />
                ))}
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
