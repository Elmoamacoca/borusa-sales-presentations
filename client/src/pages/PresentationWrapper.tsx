import { useState, useEffect } from 'react';
import { useRoute } from 'wouter';
import { useSecurePresentationAuth } from '@/hooks/useSecurePresentationAuth';
import { getPresentationBySlug } from '@/config/presentations.config';
import PresentationLogin from './PresentationLogin';
import Presentation from './Presentation';

export default function PresentationWrapper() {
  const [, params] = useRoute('/p/:slug');
  const slug = params?.slug || '';
  const { isAuthenticated } = useSecurePresentationAuth(slug);
  const [showPresentation, setShowPresentation] = useState(isAuthenticated);
  const presentation = getPresentationBySlug(slug);

  useEffect(() => {
    setShowPresentation(isAuthenticated);
  }, [isAuthenticated]);

  if (!presentation) {
    return <PresentationLogin slug={slug} onSuccess={() => setShowPresentation(true)} />;
  }

  if (!showPresentation) {
    return <PresentationLogin slug={slug} onSuccess={() => setShowPresentation(true)} />;
  }

  // Passar o slidesConfigId para a apresentação
  return <Presentation slidesConfigId={presentation.slidesConfigId} />;
}
