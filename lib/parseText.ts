import * as pdfjs from 'pdfjs-dist';

pdfjs.GlobalWorkerOptions.workerSrc =
  `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export function parseText(file: File): Promise<{
  text: string;
  metadata: {
    type: string;
    name: string;
    size: number;
    pages?: number;
  };
}> {
  if (!file) {
    return Promise.resolve({
      text: '',
      metadata: { type: 'unknown', name: '', size: 0 },
    });
  }

  const ext = file.name.split('.').pop()?.toLowerCase();

  // TXT / MD
  if (ext === 'txt' || ext === 'md') {
    return file.text().then((text) => ({
      text,
      metadata: {
        type: ext,
        name: file.name,
        size: file.size,
      },
    }));
  }

  // JSON
  if (ext === 'json') {
    return file.text().then((raw) => {
      try {
        const parsed = JSON.parse(raw);
        return {
          text: JSON.stringify(parsed, null, 2),
          metadata: {
            type: 'json',
            name: file.name,
            size: file.size,
          },
        };
      } catch {
        return {
          text: '',
          metadata: {
            type: 'json',
            name: file.name,
            size: file.size,
          },
        };
      }
    });
  }

  // PDF
  if (ext === 'pdf') {
    return file.arrayBuffer().then(async (buffer) => {
      const pdf = await pdfjs.getDocument({ data: buffer }).promise;
      let text = '';

      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const content = await page.getTextContent();
        text += content.items.map((i: any) => i.str).join(' ') + '\n';
      }

      return {
        text: text.trim(),
        metadata: {
          type: 'pdf',
          name: file.name,
          size: file.size,
          pages: pdf.numPages,
        },
      };
    });
  }

  // Fallback
  return Promise.resolve({
    text: '',
    metadata: {
      type: ext || 'unknown',
      name: file.name,
      size: file.size,
    },
  });
}
