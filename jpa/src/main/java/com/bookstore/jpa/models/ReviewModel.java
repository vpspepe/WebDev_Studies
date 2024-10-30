package com.bookstore.jpa.models;

import java.io.Serializable;
import java.util.UUID;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "TB_REVIEW")
public class ReviewModel implements Serializable{
    private static final long serialVersionUID = 1L;

    @Getter @Setter
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;

    @Getter @Setter
    @Column(nullable = false)
    private String comment;

}
