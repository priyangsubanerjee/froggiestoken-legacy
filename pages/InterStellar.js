import InterStellarParentModal from "@/components/InterStellarParentModal";
import React from "react";

function InterStellar() {
  return (
    <div>
      <InterStellarParentModal
        inerStellarModalOpen={true}
        setInerStellarModalOpen={() => {}}
        standAlone={true}
      />
    </div>
  );
}

export default InterStellar;
