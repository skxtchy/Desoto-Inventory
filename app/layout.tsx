
  return (
    <html lang="en">
      <body>
        <div className="text-black">
          <Sidebar />

          <main className="flex-1 p-4">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}