import AdminPanelLayout from "@/components/admin-panel/admin-panel-layout"
import { SheetMenu } from "@/components/admin-panel/sheet-menu"

export default function CourseLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <section>
          
          
          <SheetMenu />
      <AdminPanelLayout>

        {children}
      </AdminPanelLayout>

    </section>
  )
}