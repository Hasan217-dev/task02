import { useState } from 'react'

const HomePage = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    setSuccess('')

    try {
      const response = await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        setError(data.message || 'Something went wrong')
        return
      }

      setSuccess(data.message || 'User created successfully')
      setName('')
      setEmail('')
      setPassword('')
    } catch (err) {
      setError('Something went wrong. Please try again.')
    }
  }

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <div className="mx-auto flex min-h-screen max-w-7xl items-center justify-center px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid w-full overflow-hidden rounded-4xl border border-white/10 bg-white/5 shadow-2xl shadow-cyan-950/40 backdrop-blur-md lg:grid-cols-[1.1fr_0.9fr]">
          <section className="relative flex flex-col justify-between bg-linear-to-br from-cyan-500 via-blue-600 to-indigo-700 p-8 sm:p-10 lg:p-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.25),transparent_35%)]`" />

            <div className="relative z-10">
              <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-cyan-50">
                New workspace
              </span>

              <h1 className="mt-8 max-w-md text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl">
                Build smarter workflows for your team.
              </h1>

              <p className="mt-5 max-w-md text-base text-cyan-50/85 sm:text-lg">
                Organize projects, automate updates, and launch faster with a cleaner, more productive system.
              </p>
            </div>

            <div className="relative z-10 mt-10 grid gap-4 sm:grid-cols-3">
              {[
                ['24K+', 'Users'],
                ['99.9%', 'Uptime'],
                ['2 min', 'Setup'],
              ].map(([value, label]) => (
                <div key={label} className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm">
                  <div className="text-2xl font-bold text-white">{value}</div>
                  <div className="mt-1 text-sm text-cyan-50/80">{label}</div>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-slate-950/90 p-6 sm:p-8 lg:p-10">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-400">Welcome</p>
                <h2 className="mt-2 text-2xl font-bold text-white">Create account</h2>
              </div>
              <button
                type="button"
                className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1.5 text-sm font-medium text-slate-200 transition hover:border-cyan-500 hover:text-cyan-300"
              >
                Log in
              </button>
            </div>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-200">
                  Full name
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-slate-50 placeholder:text-slate-500 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/30"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-200">
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-slate-50 placeholder:text-slate-500 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/30"
                  required
                />
              </div>

              <div>
                <label htmlFor="password" className="mb-2 block text-sm font-medium text-slate-200">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Create a password"
                  className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-slate-50 placeholder:text-slate-500 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/30"
                  required
                />
              </div>

              {error && (
                <div className="rounded-xl border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-200">
                  {error}
                </div>
              )}

              {success && (
                <div className="rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200">
                  {success}
                </div>
              )}

              <button
                type="submit"
                className="w-full rounded-xl bg-linear-to-r from-cyan-500 to-blue-600 px-4 py-3 font-semibold text-white shadow-lg shadow-cyan-500/25 transition hover:scale-[1.01] hover:shadow-cyan-500/35 focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
              >
                Create account
              </button>
            </form>

            <div className="mt-6 flex items-center justify-center text-sm text-slate-400">
              <span>Already have an account?</span>
              <button type="button" className="ml-2 font-medium text-cyan-400 hover:text-cyan-300">
                Sign in
              </button>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}

export default HomePage