<div className="card">
    {Object.entries(pageTotals).map(([page, total]) => {
        const persona = determinePersona(total, surveyData); // This will now return the full persona object

    if (!persona) {
        return null; // Skip rendering if no persona is found
    }

    return (
        <figure key={page}>
        <h3>{toTitleCase(page)}</h3>
        <figcaption>
            When using <strong>{formValues.techOptions || '...'}</strong>, your {toTitleCase(page)} <strong>score is {total}</strong>, which suggests your related persona is like&nbsp;<strong>{persona.names}</strong>.
        </figcaption>
        <img src={persona.portrait} alt={persona.names} title={persona.names} />
        </figure>
    );
    })}
</div> 