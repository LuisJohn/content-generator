'use client'

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { contentTemplates } from '@/lib/contente-template'
import { Loader } from 'lucide-react';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import Editor from './_components/editor';
import { chatSession } from '@/lib/gemini-ai';


interface templateSlugProps {
  templateSlug: string;
}

const TemplatePage = ({ params }: {params: {}}) => {
  const [isLoading, setIsLoading ] = useState(false);
  const [ aiOutput, setAiOutput ] = useState<string>("");
  
  const pageParam = useParams();
  params = pageParam.templateslug
  
  const selectedTemplate = contentTemplates.find(
    (item) => item.slug === params
  );

  const generateAIContent = async (formData: FormData) => {
    setIsLoading(true);
    try {
      let dataSet = {
        title: formData.get('title'),
        description: formData.get('description')
      }

      const selectedPrompt = selectedTemplate?.aiPrompt
      const finalPromptAI = JSON.stringify(dataSet) + ', ' +selectedPrompt;

      const result = await chatSession.sendMessage(finalPromptAI)
      setAiOutput(result.response.text());
      setIsLoading(false)

    } catch (err) {
      console.log(err)
    }
  }


  const onSubmit = async (formData: FormData) => {
    generateAIContent(formData)
  }

  return (
    <div className='mx-5 py-2'>
      <div className='mt-5 py-6 px-4 bg-white rounded'>
        <h2 className="font-medium">{selectedTemplate?.name}</h2>
      </div>

      <form action={onSubmit}>
        <div className='flex flex-col gap-5 mt-5 p-5 bg-white'>
          {selectedTemplate?.form.map((item)=>
            <div key={selectedTemplate.slug}>
              <label>{item.label}</label>
              {item.field === 'input' ? (
                <div className='mt-5'><Input name='title'/></div>
              ):
                <div className="mt-5"><Textarea name='description'/></div>
              }
            </div>
          )}
        </div>
        <Button>{isLoading ? <Loader className='animate-spin'/> : "Generate Content"}</Button>
      </form>
          <div className='my-10'>
            <Editor value={isLoading ? "Loading..." : aiOutput}/>
          </div>
    </div>
  )
}

export default TemplatePage