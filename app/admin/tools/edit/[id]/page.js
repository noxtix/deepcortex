import ToolForm from '@/components/admin/ToolForm';
import { getTools } from '@/lib/adminUtils';
import { notFound } from 'next/navigation';

export default async function EditToolPage({ params }) {
    const toolsData = await getTools();
    const tool = toolsData.find(t => t.id === params.id);

    if (!tool) {
        notFound();
    }

    return <ToolForm tool={tool} />;
}
